package com.example.dotaApplicationTool.service;

import java.util.*;

public class Helper {

    public static <K, V extends Comparable<? super V>> Map<K, V> sortMapByValueDescending(Map<K, V> map) {
        List<Map.Entry<K, V>> list = new LinkedList<>(map.entrySet());
        Collections.sort(list, (o1, o2) -> -o1.getValue().compareTo(o2.getValue()));

        Map<K, V> result = new LinkedHashMap<>();
        for (Map.Entry<K, V> entry : list) {
            result.put(entry.getKey(), entry.getValue());
        }

        return result;
    }

    public static double roundToThreeDecimals(double value) {
        return Math.round(value * 1000.0) / 1000.0;
    }

}
