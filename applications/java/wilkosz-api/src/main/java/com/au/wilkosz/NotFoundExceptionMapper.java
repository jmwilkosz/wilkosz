package com.au.wilkosz;

import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 * Created by mupp3t on 31/03/2017.
 */
@Provider
public class NotFoundExceptionMapper implements ExceptionMapper<NotFoundException>
{
    @Override
    public Response toResponse(NotFoundException ex)
    {
        return Response.status(Response.Status.NOT_FOUND)
                .build();
    }
}
