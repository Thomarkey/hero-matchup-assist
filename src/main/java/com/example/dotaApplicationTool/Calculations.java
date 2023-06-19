package com.example.dotaApplicationTool;

import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.*;

import static com.example.dotaApplicationTool.HeroDisplay.zScoresMap;

public class Calculations {
    static final int MAIN_HP = 120;
    static final int HP_MULTIPLIER = 22;
    static final double HP_REGEN_MULTIPLIER = 0.1;
    static HeroDisplay heroDisplay = new HeroDisplay();

    public static int calculateStartingDamage(int startingDamageMin, int startingDamageMax) {
        return (startingDamageMin + startingDamageMax) / 2;
    }

    public static double calculateHP(int strengthBase) {
        return MAIN_HP + (HP_MULTIPLIER * strengthBase);
    }

    public static double calculateRawHPRegen(int hpRegen, int strengthBase) {
        double rawHPRegen = hpRegen + (HP_REGEN_MULTIPLIER * strengthBase);
        return Math.round(rawHPRegen * 10.0) / 10.0;
    }

    public int getStatsRank(JSONObject json, String selectedHero, String selectedStat) throws JSONException {
        double selectedStatValue = json.getJSONObject(selectedHero).getDouble(selectedStat);

        int rank = 1;
        Iterator<String> keys = json.keys();
        while (keys.hasNext()) {
            String key = keys.next();
            JSONObject hero = json.getJSONObject(key);
            double statValue = hero.getDouble(selectedStat);
            if (key.equals(selectedHero)) {
                continue;
            }
            if (statValue > selectedStatValue) {
                rank++;
            }
        }

        return rank;
    }

    public Map<String, Map<String, Integer>> calculateStatsRanks(JSONObject json) throws JSONException {
        Map<String, Map<String, Integer>> statsRankMap = new HashMap<>();
        for (Iterator<String> heroIter = json.keys(); heroIter.hasNext(); ) {
            String hero = heroIter.next();
            JSONObject heroObj = json.getJSONObject(hero);
            Map<String, Double> statsMap = new HashMap<>();

            //map because its needs to be sorted
            for (Iterator<String> statIter = heroObj.keys(); statIter.hasNext(); ) {
                String stat = statIter.next();
                statsMap.put(stat, heroObj.getDouble(stat));
            }

            Map<String, Integer> ranksMap = new HashMap<>();
            int rank = 1;
            for (String stat : Helper.sortMapByValueDescending(statsMap).keySet()) {
                ranksMap.put(stat, rank++);
            }
            statsRankMap.put(hero, ranksMap);
        }

        return statsRankMap;
    }


    public static Map<String, Map<String, Double>> calculateZScores(JSONObject json) throws JSONException {
        if (zScoresMap == null) {
            Map<String, Map<String, Double>> zScoresMap = new HashMap<>();

            // Step 1: Calculate mean and standard deviation for each statistic
            Map<String, Double> meanMap = new HashMap<>();
            Map<String, Double> stdDevMap = new HashMap<>();

            // Step 2: Separate ranged and melee heroes based on attack range
            List<Double> rangedAttackRanges = new ArrayList<>();
            List<Double> meleeAttackRanges = new ArrayList<>();

            for (Iterator<String> heroIter = json.keys(); heroIter.hasNext(); ) {
                String hero = heroIter.next();
                JSONObject heroObj = json.getJSONObject(hero);
                boolean isRanged = heroObj.getInt("isRanged") == 1;

                // Iterate over the hero's stats
                for (Iterator<String> statIter = heroObj.keys(); statIter.hasNext(); ) {
                    String stat = statIter.next();
                    double value = heroObj.getDouble(stat);

                    if (stat.equals("attackRange")) {
                        if (isRanged) {
                            rangedAttackRanges.add(value);
                        } else {
                            meleeAttackRanges.add(value);
                        }
                    } else {

                        meanMap.merge(stat, value, Double::sum);
                        stdDevMap.merge(stat, value * value, Double::sum);
                    }
                }
            }

            int numHeroes = json.length();
            for (String stat : meanMap.keySet()) {
                double mean = meanMap.get(stat) / numHeroes;
                double stdDev = Math.sqrt(stdDevMap.get(stat) / numHeroes - mean * mean);
                stdDevMap.put(stat, stdDev);
                meanMap.put(stat, mean);
            }

            // Step 3: Calculate z-score for each statistic of each hero
            for (Iterator<String> heroIter = json.keys(); heroIter.hasNext(); ) {
                String hero = heroIter.next();
                JSONObject heroObj = json.getJSONObject(hero);
                boolean isRanged = heroObj.getInt("isRanged") == 1;
                Map<String, Double> zScoreMap = new HashMap<>();
                for (Iterator<String> statIter = heroObj.keys(); statIter.hasNext(); ) {
                    String stat = statIter.next();
                    double value = heroObj.getDouble(stat);
                    double mean = meanMap.getOrDefault(stat, 0.0);
                    double stdDev = stdDevMap.getOrDefault(stat, 0.0);
                    double zScore;

                    if (stat.equals("attackRange")) {
                        if (isRanged) {
                            double rangedMean = calculateMean(rangedAttackRanges);
                            double rangedStdDev = calculateStdDev(rangedAttackRanges, rangedMean);
                            zScore = (value - rangedMean) / rangedStdDev;
                        } else {
                            double meleeMean = calculateMean(meleeAttackRanges);
                            double meleeStdDev = calculateStdDev(meleeAttackRanges, meleeMean);
                            zScore = (value - meleeMean) / meleeStdDev;
                        }
                    } else {
                        if (stdDev == 0) {
                            zScore = 0;
                        } else {
                            zScore = (value - mean) / stdDev;
                        }
                    }

                    zScoreMap.put(stat, zScore);
                }
                zScoresMap.put(hero, zScoreMap);
            }
            return zScoresMap;
        } else {
            return zScoresMap;
        }
    }

    // Helper method to calculate the mean
    private static double calculateMean(List<Double> values) {
        double sum = 0;
        for (double value : values) {
            sum += value;
        }
        return sum / values.size();
    }

    // Helper method to calculate the standard deviation
    private static double calculateStdDev(List<Double> values, double mean) {
        double sumSquaredDiff = 0;
        for (double value : values) {
            double diff = value - mean;
            sumSquaredDiff += diff * diff;
        }
        double variance = sumSquaredDiff / values.size();
        return Math.sqrt(variance);
    }


    //TODO: seperate attackrange scores for melee vs ranged
    public static Map<String, Map<String, Double>> mapAllMinMaxPropertiesValues(JSONObject heroesStatsJson) throws JSONException {
        Map<String, Map<String, Double>> propertyMinMaxMap = new HashMap<>();

        // Iterate over each hero in the JSON object
        for (Iterator it = heroesStatsJson.keys(); it.hasNext(); ) {
            String heroName = (String) it.next();
            JSONObject heroObj = heroesStatsJson.getJSONObject(heroName);

            // Iterate over each property in the hero's JSON object
            for (Iterator iter = heroObj.keys(); iter.hasNext(); ) {
                String property = (String) iter.next();
                if (heroObj.get(property) instanceof Number) {
                    double value = Helper.roundToThreeDecimals(heroObj.getDouble(property));

                    // Update the minimum and maximum values for the property
                    if (!propertyMinMaxMap.containsKey(property)) {
                        // If the property is encountered for the first time, initialize the min and max values
                        Map<String, Double> minMaxValues = new HashMap<>();
                        minMaxValues.put("min", value);
                        minMaxValues.put("max", value);
                        propertyMinMaxMap.put(property, minMaxValues);
                    } else {
                        // Update the min and max values if necessary
                        Map<String, Double> minMaxValues = propertyMinMaxMap.get(property);
                        double minValue = minMaxValues.get("min");
                        double maxValue = minMaxValues.get("max");

                        if (value < minValue) {
                            minMaxValues.put("min", value);
                        }
                        if (value > maxValue) {
                            minMaxValues.put("max", value);
                        }
                    }
                }
            }
        }

        return propertyMinMaxMap;
    }

    public static Double getHeroZScore(String hero, String propertyName) throws UnirestException, JSONException {
        if (zScoresMap == null) {
            JSONObject heroesStatsJson = heroDisplay.getHeroesWithStatsJson();
            zScoresMap = calculateZScores(heroesStatsJson);
        }

        Map<String, Double> heroZScores = zScoresMap.get(hero);
        if (heroZScores == null) {
            throw new IllegalArgumentException("Hero not found: " + hero);
        }

        Double zScore = heroZScores.get(propertyName);
        if (zScore == null) {
            throw new IllegalArgumentException("Property not found for hero " + hero + ": " + propertyName);
        }

        return Helper.roundToThreeDecimals(zScore);
    }

}