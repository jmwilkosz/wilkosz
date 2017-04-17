package com.au.wilkosz;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class WebApplicationExceptionMapper implements ExceptionMapper<WebApplicationException>
{
    @Override
    public Response toResponse(WebApplicationException ex)
    {
        return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                .build();
    }
}