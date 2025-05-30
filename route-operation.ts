const createOperation = <
  TOptions extends BaseOptions = BaseOptions,
  TContentType extends BaseContentType = AnyContentTypeWithAutocompleteForMostCommonOnes
>({
  input,
  outputs,
  middleware1,
  middleware2,
  middleware3,
  handler
}: {
  input?: InputObject;
  outputs?: readonly OutputObject[];
  middleware1?: RouteMiddleware<any, any>;
  middleware2?: RouteMiddleware<any, any>;
  middleware3?: RouteMiddleware<any, any>;
  handler?: TypedRouteHandler<Method, TContentType, unknown, BaseQuery, BaseParams, BaseHeaders, TOptions, unknown, number, TContentType, readonly OutputObject[], void | NextResponse<any>>;
}): RouteOperationDefinition<Method> => ({
  openApiOperation,
  method,
  input,
  outputs,
  middleware1,
  middleware2,
  middleware3,
  handler
});