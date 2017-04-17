package com.au.wilkosz.helpers;

/**
 * Created by mupp3t on 3/01/2017.
 */
public class BooleanUtilities {
    public static String BooleanToCamelCaseString(Boolean bool)
    {
        if(bool != null)
        {
            return bool
                    ? "True"
                    : "False";
        }

        return "null";
    }

    public static String BooleanToLowerCaseString(Boolean bool)
    {
        if(bool != null)
        {
            return bool
                    ? "true"
                    : "false";

        }

        return "null";
    }
}
