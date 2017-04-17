package com.au.wilkosz.controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.text.MessageFormat;
import java.util.Date;

/**
 * Created by mupp3t on 3/01/2017.
 */
@Path("heartbeat")
public class HeartBeat {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response testConnection()
    {
        String message = MessageFormat.format("{0} {1}","Server responded at time",new Date().toString());

        return Response.status(Response.Status.OK)
                .entity(message)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }
}
