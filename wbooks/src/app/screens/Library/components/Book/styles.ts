import { AppColors } from "@constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 60,
    backgroundColor: AppColors.iron
  },
  book: {
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: AppColors.white
  },
  textContainer: {
    width: '70%',
    marginLeft: 20
  },
  title: {
    marginBottom: 4
  }
});
