/* import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google"; */
import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/LogoNegro.png";
import { SignIn } from "./SignIn";
import { RegistroDonante } from "./RegistroDonante";
/* import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"; */
import {
  ImageBackground,
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

export const LogIn = ({ modalLogin, setModalLogin }) => {
  const [email, setEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [modalRegistroDonante, setModalRegistroDonante] = useState(false);
  const [modalSignIn, setModalSignIn] = useState(false);

  return (
    <Modal animationType="slide" visible={modalLogin}>
      <View style={styles.topBox} />
      <Image source={Logo} style={styles.logo} />
      <View style={styles.bottomBox} />
      <View>
        <Text style={styles.title}>Bienvenido a Obras Sociales Betania</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.campoUsuario}>
          <Text style={styles.text}>Nombre de usuario</Text>
          <TextInput
            placeholder="@fosbetania.org"
            placeholderTextColor={"#000000c0"}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>
        <View style={styles.campoContraseña}>
          <Text style={styles.text}>Contraseña </Text>
          <TextInput
            placeholder="**********"
            placeholderTextColor={"#000000c0"}
            style={styles.input}
            value={userPassword}
            onChangeText={setUserPassword}
          ></TextInput>
        </View>
        <View>
          <Pressable
            style={[styles.btn]}
            onPress={() => {
              setModalRegistroDonante(true);
            }}
          >
            <RegistroDonante
              modalRegistroDonante={modalRegistroDonante}
              setModalRegistroDonante={setModalRegistroDonante}
            ></RegistroDonante>
            <Text style={styles.subtitle}>Ingresar</Text>
          </Pressable>
          <Text>{"\n"}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                height: 2.5,
                backgroundColor: "#ccc",
                marginLeft: 25,
              }}
            />
            <Text style={{ marginHorizontal: 10, fontSize: 16 }}>Ó</Text>
            <View
              style={{
                flex: 1,
                height: 2.5,
                backgroundColor: "#ccc",
                marginRight: 25,
              }}
            />
          </View>
        </View>
        <View>
          <Pressable
            style={[styles.btn]}
            onPress={() => {
              setModalSignIn(true);
            }}
          >
            <SignIn
              modalSignIn={modalSignIn}
              setModalSignIn={setModalSignIn}
            ></SignIn>
            <Text style={styles.subtitle}>Registrarse</Text>
          </Pressable>
          <Text>{"\n"}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}></View>
        </View>
      </View>

      {/*<Pressable
            style={styles.btnExit}
            onPress={() => {
              setModalLogin(!modalLogin);
            }}>
            <Text style={styles.btnExit}> X Cerrar</Text>
        </Pressable>*/}
    </Modal>
  );
};

const styles = StyleSheet.create({
  topBox: {
    backgroundColor: "rgba(67, 179, 169,0.8)", // Set your desired color
    height: 126, // Set the height of the top box
    width: 450,
  },
  logo: {
    marginTop: -125,
    height: 125,
    width: 170,
    marginLeft: 110,
  },
  bottomBox: {
    backgroundColor: "rgba(67, 179, 169,0.8)", // Set your desired color
    height: 100, // Set the height of the bottom box
    width: 450,
    position: "absolute",
    bottom: 0,
  },
  btnExit: {
    backgroundColor: "#0069A3",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#000000",
    fontWeight: "800",
    marginTop: 20,
  },
  container: {
    backgroundColor: "#FFFDFD",
    height: 510,
    width: 360,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 25,
    marginTop: 20,
  },
  ViewLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textAuth: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userimage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  campoUsuario: {
    marginTop: 35,
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.9,
    marginBottom: 20,
    borderColor: "red",
  },
  campoContraseña: {
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.9,
    borderColor: "black",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  btnRegistrar: {
    backgroundColor: "#0069A3",
  },
  btn: {
    height: 45,
    width: 280,
    padding: 10,
    marginTop: 30,
    marginLeft: 40,
    borderRadius: 10,
    backgroundColor: "#0069a3",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 20,
  },
});
