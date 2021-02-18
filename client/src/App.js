import { Switch, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import SkinfluencersPage from "./pages/SkinfluencersPage";
import CreateThreadPage from "./pages/forum/CreateThreadPage";
import ForumFeedPage from "./pages/forum/ForumFeedPage";
import ThreadDetailPage from "./pages/forum/ThreadDetailPage";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      React App
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/skinfluencers" component={SkinfluencersPage} />
        <Route exact path="/forum" component={ForumFeedPage} />
        <Route exact path="/forum/thread/:id" component={ThreadDetailPage} />
        <Route exact path="/forum/create-thread" component={CreateThreadPage} />
      </Switch>
    </div>
  );
};

export default App;

// TODO: Create protected (check login) route for /forum/create-thread
