import Learn from "./Learn";
import Setup from "../Pages/setupAndConfig";
import GettingPReady from "../Pages/gettingPReady";
import BasicSnap from "../Pages/basicSnap";
import BranchM from "../Pages/branchingM";
import SharingUp from "../Pages/sharingUpdt";
import IC from "../Pages/inspectionC";
import Patching from "../Pages/patching";
import Debugging from "../Pages/debugging";
import Commands from "../Pages/Commands";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Docs() {
  return (
    <Stack.Navigator
      initialRouteName="Docs"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#900" },
      }}
    >
      <Stack.Screen
        name="Docs"
        component={Learn}
        options={{
          title: "Docs",
        }}
      />
      <Stack.Screen
        name="Setup and Configuration"
        component={Setup}
        options={{
          title: "Setup and Configuration",
        }}
      />
      <Stack.Screen
        name="Getting and Creating projects"
        component={GettingPReady}
        options={{
          gestureEnabled: false,
          title: "Getting and Creating projects",
        }}
      />
      <Stack.Screen
        name="Basic Snapshooting"
        component={BasicSnap}
        options={{
          gestureEnabled: false,
          title: "Basic Snapshooting",
        }}
      />
      <Stack.Screen
        name="Branching and Merging"
        component={BranchM}
        options={{
          gestureEnabled: false,
          title: "Branching and Merging",
        }}
      />
      <Stack.Screen
        name="Sharing and Updating Projects"
        component={SharingUp}
        options={{
          gestureEnabled: false,
          title: "Sharing and Updating Projects",
        }}
      />
      <Stack.Screen
        name="Inspection and Comparison"
        component={IC}
        options={{
          gestureEnabled: false,
          title: "Inspection and Comparison",
        }}
      />
      <Stack.Screen
        name="Patching"
        component={Patching}
        options={{
          gestureEnabled: false,
          title: "Patching",
        }}
      />
      <Stack.Screen
        name="Debugging"
        component={Debugging}
        options={{
          gestureEnabled: false,
          title: "Debugging",
        }}
      />
      <Stack.Screen
        name="Commands"
        component={Commands}
        options={{
          gestureEnabled: false,
          title: "Commands",
        }}
      />
    </Stack.Navigator>
  );
}
export default Docs;
