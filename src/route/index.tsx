import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuthSelector } from "../state/selector";
import permissionRoutes from "./routes";
import { Loader } from "../component/atomic";
import { Layout } from "../component/template";

const AppRoute: React.FC = () => {
  const { user, isAuthenticated } = useAuthSelector();
  const { guest, member } = permissionRoutes;
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        {isAuthenticated ? (
          <Layout>
            <Switch>
              {member.routes.map((route: any, idx: number) => {
                if (user.permission.includes(route.permission)) {
                  return (
                    route.component && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={true}
                        render={(props) => <route.component {...props} />}
                      />
                    )
                  );
                } else {
                  return null;
                }
              })}
              <Route path="*">
                <Redirect to={member.redirect.path}></Redirect>
              </Route>
            </Switch>
          </Layout>
        ) : (
          <>
            <Switch>
              {guest.routes.map((route: any, idx: number) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={true}
                      render={(props) => <route.component {...props} />}
                    />
                  )
                );
              })}
              <Route path="*">
                <Redirect to={guest.redirect.path}></Redirect>
              </Route>
            </Switch>
          </>
        )}
      </Suspense>
    </div>
  );
};

export default AppRoute;
