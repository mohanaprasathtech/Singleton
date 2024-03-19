import React from "react";
import { View, Text, FlatList } from "react-native";
import DataService from "./DataService";
function App() {
  const dataArray = DataService.getArrayData();
  const renderArrayItem = ({ item }) => (
    <View style={{ alignItems: "center" }}>
      <Text>{item}</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={dataArray}
        renderItem={renderArrayItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default App;
