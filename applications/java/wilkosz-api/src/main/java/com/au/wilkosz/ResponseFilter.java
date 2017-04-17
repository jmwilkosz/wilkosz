package com.au.wilkosz;


import javax.annotation.Resource;
import javax.naming.InitialContext;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.Context;
import javax.ws.rs.ext.Provider;

import java.io.IOException;

@Provider
@PreMatching
public class ResponseFilter implements ContainerResponseFilter {

    @Resource(name="SESSION_DURATION") private Integer session;

    @Override
    public void filter(ContainerRequestContext requestCtx, ContainerResponseContext responseCtx) throws IOException
    {
//        responseCtx.getHeaders().add( "Access-Control-Allow-Origin", this.origin);
//        responseCtx.getHeaders().add( "Access-Control-Allow-Headers", StringUtilities.ArrayToString(this.headers.split(",")));
//        responseCtx.getHeaders().add( "Access-Control-Allow-Credentials", BooleanUtilities.BooleanToLowerCaseString(this.credentials));
//        responseCtx.getHeaders().add( "Access-Control-Allow-Methods", StringUtilities.ArrayToString(this.methods.split(",")));
//        responseCtx.getHeaders().add( "Access-Control-Allow-Max-Age", String.valueOf(this.maxAge));
//        if(!this.xPoweredBy)
//        {
//            responseCtx.getHeaders().add("X-Powered-By","");
//            responseCtx.getHeaders().add("Server","");
//        }
    }
}