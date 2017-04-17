package com.au.wilkosz.controllers;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import javax.annotation.Resource;
import javax.naming.InitialContext;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;

/**
 * Created by joshuawilkosz on 13/4/17.
 */
@Path("maps")
public class Maps {

    private final String GOOGLE_MAP_URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcZamiQnGTcULAVFiQZQ56uAvOD9VJ-Xo";

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getGoogleMaps(@Context ServletContext servletContext,@Context InitialContext initialContext){

        String test = servletContext.getInitParameter("ALLOWED_HOSTS");
        String data = null;

        try
        {
            HttpClient client = HttpClients.custom().build();
            HttpUriRequest request = RequestBuilder.get()
                    .setUri(GOOGLE_MAP_URL)
                    .setHeader(HttpHeaders.CONTENT_TYPE, "application/json")
                    .build();
            HttpResponse response = client.execute(request);

            HttpEntity entity = response.getEntity();
            data = EntityUtils.toString(entity, "UTF-8").trim();
        }
        catch(IOException ex)
        {
            //System.out.print(ex);
        }

        return Response.status(Response.Status.OK)
                .entity(data)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }
}
