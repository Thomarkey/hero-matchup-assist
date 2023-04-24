package com.example.dotaApplicationTool;

import com.mashape.unirest.http.*;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HeroDisplay {

    final String URL = "https://api.stratz.com/api/v1/Hero";
    final String BEARER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTc5NzgzMzE0OTgiLCJ1bmlxdWVfbmFtZSI6IlRPTUFUT1JPIiwiU3ViamVjdCI6ImYzNDg2ODVjLWYyYTAtNDllZS1hNGYwLWM5ZmUwYjc4OWUyYiIsIlN0ZWFtSWQiOiIxODA2NTc3MCIsIm5iZiI6MTY4MDE2NTg3MCwiZXhwIjoxNzExNzAxODcwLCJpYXQiOjE2ODAxNjU4NzAsImlzcyI6Imh0dHBzOi8vYXBpLnN0cmF0ei5jb20ifQ.3o_pX3YaUn-oVp4x_LeBfkkp9xoSRIaFolcYwnx5mJc";

    public String getAllHeroes() throws UnirestException {
        Unirest.setTimeouts(0, 0);
        HttpResponse<String> response = Unirest.get(URL)
                .header("Authorization", "Bearer " + BEARER)
                .asString();
        return response.getBody();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/heroes")
    public String getHeroes() throws UnirestException {
        return getAllHeroes();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/heroes/{name}")
    public String getHeroByName(@PathVariable String name) throws UnirestException, JSONException {
        return returnHero(name);
    }

    public String returnHero(String name) throws UnirestException, JSONException {

        String jsonString = getAllHeroes();
        JSONObject obj = new JSONObject(jsonString);
        String heroJson = null;

        Iterator<String> keys = obj.sortedKeys();
        while (keys.hasNext()) {
            String key = keys.next();
            JSONObject hero = obj.getJSONObject(key);
            String displayName = hero.getString("displayName");
            if (displayName.equals(name)) {
                heroJson = hero.toString();
            }
        }

        return heroJson;
    }

}
