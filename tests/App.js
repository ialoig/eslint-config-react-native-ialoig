import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const App = () => {

	return (
		<View style={style.header}>
			<Text>This is my ESLint configuration for React Native</Text>
		</View>
	)
}

export const style = StyleSheet.create({
	header: {
		alignItems: "center",
		backgroundColor: color.background,
		color: color.primary,
		display: "flex",
		flexDirection: "column",
		fontSize: "24px",
		justifyContent: "center",
		minHeight: "100px",
		textAlign: "center",
	}
})

export const color = StyleSheet.create({
	background: "#282c34",
	primary: "#FFFFFF"
})