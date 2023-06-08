package com.example.dotaApplicationTool;

import com.mashape.unirest.http.*;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import static com.example.dotaApplicationTool.Calculations.calculateZScores;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HeroDisplay {

    public static Map<String, Map<String, Double>> zScoresMap;
    public static Map<String, Map<String, Double>> minMaxPropertyValuesMap;

    final String URL = "https://api.stratz.com/api/v1/Hero";
    final String BEARER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTc5NzgzMzE0OTgiLCJ1bmlxdWVfbmFtZSI6IlRPTUFUT1JPIiwiU3ViamVjdCI6ImYzNDg2ODVjLWYyYTAtNDllZS1hNGYwLWM5ZmUwYjc4OWUyYiIsIlN0ZWFtSWQiOiIxODA2NTc3MCIsIm5iZiI6MTY4MjM0MTYzNCwiZXhwIjoxNzEzODc3NjM0LCJpYXQiOjE2ODIzNDE2MzQsImlzcyI6Imh0dHBzOi8vYXBpLnN0cmF0ei5jb20ifQ.XtyfxyjVDpP5DTHMCEnIuYpFqcnMqqu4M9l-Lod-Tnk";

    public String getAllHeroes() throws UnirestException, JSONException {
        Unirest.setTimeouts(0, 0);
        HttpResponse<String> response = Unirest.get(URL)
                .header("Authorization", "Bearer " + BEARER)
                .asString();

        System.out.println("Response code: " + response.getStatus() + " " + LocalDateTime.now());

        JSONObject responseJSON = new JSONObject(response.getBody());
        JSONObject updatedJson = addExtraStatsToHeroes(responseJSON);


        return updatedJson.toString();
    }


    @RequestMapping(method = RequestMethod.GET, path = "api/heroes")
    public String getHeroes() throws UnirestException, JSONException {
        return getAllHeroes();
    }


    @GetMapping("/hero/{heroName}")
    public String getHero(@PathVariable String heroName) throws UnirestException, JSONException {
        return returnHero(heroName);
    }

    public String returnHero(String name) throws UnirestException, JSONException {

        String jsonString = getAllHeroes();
        JSONObject obj = new JSONObject(jsonString);
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
        String jsonString = getAllHeroes();
        JSONObject obj = new JSONObject(jsonString);
        List<String> heroesList = new ArrayList<String>();

        Iterator<String> keys = obj.sortedKeys();
        while (keys.hasNext()) {
            String key = keys.next();
            JSONObject hero = obj.getJSONObject(key);
            heroesList.add(hero.getString("displayName"));
        }
        Collections.sort(heroesList);

        return heroesList;
    }

    public JSONObject getHeroesWithStatsJson() throws JSONException, UnirestException {
        JSONObject json = new JSONObject(getAllHeroes());
        JSONObject resultJson = new JSONObject();

        Iterator<String> sortedKeys = json.keys();
        while (sortedKeys.hasNext()) {
            String key = sortedKeys.next();
            JSONObject hero = json.getJSONObject(key);
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
            }

            resultJson.put(displayName, statObj);
        }

        System.out.println(resultJson);
        return resultJson;
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

//            int startingDamageMin = statObj.getInt("startingDamageMin");
//            int startingDamageMax = statObj.getInt("startingDamageMax");
//            int startingDamage = (startingDamageMin + startingDamageMax) / 2;
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
            JSONObject heroesStatsJson = getHeroesWithStatsJson();
            zScoresMap = calculateZScores(heroesStatsJson);
        }
        System.out.println("returning the zScoresMap from the getAllHeroesPropertiesZScores aka /propertiesZScores");
        System.out.println(zScoresMap);
        return zScoresMap;
    }

    //TODO: rework the double called getHeroesWithsStatsJson()
    @GetMapping("/minMaxPropertiesValues")
    public Map<String, Map<String, Double>> getAllMinMaxPropertiesValues() throws JSONException, UnirestException {
        JSONObject heroesStatsJson = getHeroesWithStatsJson();
        minMaxPropertyValuesMap = Calculations.mapAllMinMaxPropertiesValues(heroesStatsJson);
        return minMaxPropertyValuesMap;
    }


    @GetMapping("/hero/{heroName}/{propertyName}")
    public Double getHeroPropertyZScore(@PathVariable String heroName, @PathVariable String propertyName) throws UnirestException, JSONException {
        return Calculations.getHeroZScore(heroName, propertyName);
    }

}