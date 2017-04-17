package com.au.wilkosz;

import com.au.wilkosz.controllers.HeartBeat;
import com.au.wilkosz.controllers.Maps;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by joshuawilkosz on 13/4/17.
 */
@ApplicationPath("/")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<Class<?>>();
        // register root resource
        classes.add(HeartBeat.class);
        classes.add(Maps.class);
        classes.add(ResponseFilter.class);
        classes.add(RequestFilter.class);
        classes.add(NotFoundExceptionMapper.class);
        classes.add(WebApplicationExceptionMapper.class);
        return classes;
    }

    private void addRestResourceClasses(Set<Class<?>> resources)
    {
        resources.add(HeartBeat.class);
        resources.add(Maps.class);
    }
}
