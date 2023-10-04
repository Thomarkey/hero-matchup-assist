package com.example.dotaApplicationTool.controller;

import com.example.dotaApplicationTool.service.Calculations;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import static com.example.dotaApplicationTool.service.Calculations.calculateZScores;


@RestController
@CrossOrigin(origins = {"http://localhost:4200", "https://dota-hero-matchup-cfe3a3ef874f.herokuapp.com", "https://dota-hero-matchup-cfe3a3ef874f.herokuapp.com"})
public class HeroController {

    public static Map<String, Map<String, Double>> zScoresMap;
    public static Map<String, Map<String, Double>> minMaxPropertyValuesMap;
    private static String allHeroesJsonString;
    private static JSONObject allHeroesWithStatsJson;
    private final String URL = "https://api.stratz.com/api/v1/Hero";
    private final String BEARER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTc5NzgzMzE0OTgiLCJ1bmlxdWVfbmFtZSI6IlRPTUFUT1JPIiwiU3ViamVjdCI6ImYzNDg2ODVjLWYyYTAtNDllZS1hNGYwLWM5ZmUwYjc4OWUyYiIsIlN0ZWFtSWQiOiIxODA2NTc3MCIsIm5iZiI6MTY4MjM0MTYzNCwiZXhwIjoxNzEzODc3NjM0LCJpYXQiOjE2ODIzNDE2MzQsImlzcyI6Imh0dHBzOi8vYXBpLnN0cmF0ei5jb20ifQ.XtyfxyjVDpP5DTHMCEnIuYpFqcnMqqu4M9l-Lod-Tnk";

    public String getAllHeroes() throws UnirestException, JSONException {
        if (allHeroesJsonString == null) {
            Unirest.setTimeouts(0, 0);
            HttpResponse<String> response = Unirest.get(URL)
                    .header("Authorization", "Bearer " + BEARER)
                    .asString();

            System.out.println("Response code: " + response.getStatus() + " " + LocalDateTime.now());

            JSONObject responseJSON = new JSONObject(response.getBody());
            JSONObject allHeroesJson = addExtraStatsToHeroes(responseJSON);
            allHeroesJsonString = allHeroesJson.toString();
        }
        return allHeroesJsonString;
    }

    @RequestMapping(method = RequestMethod.GET, path = "api/heroes")
    public String getHeroes() throws UnirestException, JSONException {
        return getAllHeroes();
    }

    private JSONObject getAllHeroesJsonObject() throws JSONException, UnirestException {
        if (allHeroesJsonString == null) {
            return new JSONObject(getAllHeroes());
        } else {
            return new JSONObject(allHeroesJsonString);
        }
    }

    public JSONObject getHeroesWithStatsJsonObject() throws JSONException, UnirestException {
        if (allHeroesWithStatsJson == null) {
            JSONObject allHeroesJson = getAllHeroesJsonObject();
            allHeroesWithStatsJson = getHeroesWithStatsJson(allHeroesJson);
        }
        return allHeroesWithStatsJson;
    }

    public JSONObject getHeroesWithStatsJson(JSONObject allHeroesJson) throws JSONException {
        JSONObject resultJson = new JSONObject();

        Iterator<String> sortedKeys = allHeroesJson.keys();
        while (sortedKeys.hasNext()) {
            String key = sortedKeys.next();
            JSONObject hero = allHeroesJson.getJSONObject(key);
            String displayName = hero.getString("displayName");
            JSONObject stat = hero.getJSONObject("stat");

            JSONObject statObj = new JSONObject();

            Iterator<String> statKeys = stat.keys();
            while (statKeys.hasNext()) {
                String statKey = statKeys.next();
                Object statValue = stat.get(statKey);
                if (statValue instanceof Number) {
                    statObj.put(statKey, statValue);
                }
                if (statKey.equals("attackType")) {
                    statObj.put("isRanged", statValue.equals("Ranged") ? 1 : 0);
                }
            }

            resultJson.put(displayName, statObj);
        }

        System.out.println(resultJson);
        return resultJson;
    }

    @GetMapping("/hero/{heroName}")
    public String getHero(@PathVariable String heroName) throws UnirestException, JSONException {
        return returnHero(heroName);
    }

    public String returnHero(String name) throws UnirestException, JSONException {
        JSONObject obj = getAllHeroesJsonObject();

        String heroJson = "";

        Iterator<String> keys = obj.sortedKeys();
        while (keys.hasNext()) {
            String key = keys.next();
            JSONObject hero = obj.getJSONObject(key);
            String displayName = hero.getString("displayName");
            if (displayName.equalsIgnoreCase(name)) {
                heroJson = hero.toString();
                break;
            }
        }

        return heroJson;
    }

    @GetMapping("/heroNames")
    public List<String> getHeroNames() throws UnirestException, JSONException {

        JSONObject obj = getAllHeroesJsonObject();
        List<String> heroesList = new ArrayList<>();

        Iterator<String> keys = obj.sortedKeys();
        while (keys.hasNext()) {
            String key = keys.next();
            JSONObject hero = obj.getJSONObject(key);
            heroesList.add(hero.getString("displayName"));
        }
        Collections.sort(heroesList);

        return heroesList;
    }

    //EXTRA STATS: attackDamage, HP, rawHPRegen
    public JSONObject addExtraStatsToHeroes(JSONObject heroesJson) throws JSONException {
        JSONObject resultJson = new JSONObject();

        Iterator<String> keys = heroesJson.keys();
        while (keys.hasNext()) {
            String key = keys.next();
            JSONObject heroObj = heroesJson.getJSONObject(key);
            String displayName = heroObj.getString("displayName");
            JSONObject statObj = heroObj.getJSONObject("stat");

            int startingDamage = Calculations.calculateStartingDamage(statObj.getInt("startingDamageMin"), statObj.getInt("startingDamageMax"));
            double hp = Calculations.calculateHP(statObj.getInt("strengthBase"));
            double rawHPRegen = Calculations.calculateRawHPRegen(statObj.getInt("hpRegen"), statObj.getInt("strengthBase"));

            statObj.put("startingDamage", startingDamage);
            statObj.put("hp", hp);
            statObj.put("rawHPRegen", rawHPRegen);

            JSONObject updatedHeroObj = new JSONObject();
            updatedHeroObj.put("displayName", displayName);
            updatedHeroObj.put("stat", statObj);

            resultJson.put(displayName, updatedHeroObj);
        }

        return resultJson;
    }

    @GetMapping("/propertiesZScores")
    public Map<String, Map<String, Double>> getAllHeroesPropertiesZScores() throws JSONException, UnirestException {
        System.out.println("getHeroPropertyZScore");
        if (zScoresMap == null) {
            JSONObject heroesStatsJson = getHeroesWithStatsJsonObject();
            zScoresMap = calculateZScores(heroesStatsJson);
        }
        System.out.println("returning the zScoresMap from the getAllHeroesPropertiesZScores aka /propertiesZScores");
        System.out.println(zScoresMap);
        return zScoresMap;
    }

    @GetMapping("/minMaxPropertiesValues")
    public Map<String, Map<String, Double>> getAllMinMaxPropertiesValues() throws JSONException, UnirestException {
        JSONObject heroesStatsJson = getHeroesWithStatsJsonObject();
        minMaxPropertyValuesMap = Calculations.mapAllMinMaxPropertiesValues(heroesStatsJson);
        return minMaxPropertyValuesMap;
    }

    @GetMapping("/hero/{heroName}/{propertyName}")
    public Double getHeroPropertyZScore(@PathVariable String heroName, @PathVariable String propertyName) throws
            UnirestException, JSONException {
        return Calculations.getHeroZScore(heroName, propertyName);
    }

}