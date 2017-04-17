package com.au.wilkosz.helpers;

/**
 * Created by mupp3t on 3/01/2017.
 */
public class StringUtilities {
    public static String ArrayToString(String[] arr)
    {
        String str = "";

        for(String string : arr)
        {
            if(string != null && !string.isEmpty())
            {
                str = str + "," + string;
            }
        }
        return str;
    }
}
