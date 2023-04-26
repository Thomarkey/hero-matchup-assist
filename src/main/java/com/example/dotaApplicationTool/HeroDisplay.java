package com.example.dotaApplicationTool;

import com.mashape.unirest.http.*;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HeroDisplay {

    final String URL = "https://api.stratz.com/api/v1/Hero";
    final String BEARER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTc5NzgzMzE0OTgiLCJ1bmlxdWVfbmFtZSI6IlRPTUFUT1JPIiwiU3ViamVjdCI6ImYzNDg2ODVjLWYyYTAtNDllZS1hNGYwLWM5ZmUwYjc4OWUyYiIsIlN0ZWFtSWQiOiIxODA2NTc3MCIsIm5iZiI6MTY4MjM0MTYzNCwiZXhwIjoxNzEzODc3NjM0LCJpYXQiOjE2ODIzNDE2MzQsImlzcyI6Imh0dHBzOi8vYXBpLnN0cmF0ei5jb20ifQ.XtyfxyjVDpP5DTHMCEnIuYpFqcnMqqu4M9l-Lod-Tnk";

    public String getAllHeroes() throws UnirestException {
        Unirest.setTimeouts(0, 0);
        HttpResponse<String> response = Unirest.get(URL)
                .header("Authorization", "Bearer " + BEARER)
                .asString();

        System.out.println("Response code: " + response.getStatus() + " " + LocalDateTime.now());

                                                                        return response.getBody();
    }

    @RequestMapping(method = RequestMethod.GET, path = "api/heroes")
    public String getHeroes() throws UnirestException {
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
}
