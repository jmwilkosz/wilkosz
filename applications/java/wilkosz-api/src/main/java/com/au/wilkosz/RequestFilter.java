package com.au.wilkosz;

import javax.annotation.Resource;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

@Provider
@PreMatching
public class RequestFilter implements ContainerResponseFilter
{
    private final String HOST_HEADER = "host";

    @Override
    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException
    {
//        List<String> allowedHosts = new ArrayList<String>(Arrays.asList(hosts.split(","))); ;
//        List<String> originHeaders = containerRequestContext.getHeaders().getOrDefault(HOST_HEADER,new ArrayList<>());
//
//        if(!allowedHosts.retainAll(originHeaders))
//        {
//            containerRequestContext.abortWith(
//                    Response.status(Response.Status.UNAUTHORIZED)
//                            .build());
//        }
    }
}
