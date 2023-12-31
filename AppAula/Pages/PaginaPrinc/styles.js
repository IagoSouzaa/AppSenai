import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    padding: 15,
    backgroundColor: "#7552b3",
    color: "#f8f9fb",
    gap: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "#7552b3",
    alignItems: "center",
    justifyContent: "center",
    color: "#f8f9fb",
    gap: 20,
  },

  rowContainer: {
    flexDirection: "row",
  },

  defaultText: {
    color: "#f8f9fb",
    fontSize: "medium",
  },

  inputContainer: {
    backgroundColor: "#7552b3",
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    margin: 10,
  },

  input: {
    width: 180,
    height: 50,
    padding: 10,
    color: "#fff",
    backgroundColor: "transparent",
  },

  fullInput: {
    height: 30,
    padding: 5,
    color: "#fff",
    backgroundColor: "transparent",
  },

  pageTitleHeader: {
    fontSize: "xx-large",
    fontWeight: "bold",
    color: "#fff",
    width: "50%",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: "50%",
  },
});

export { styles };
