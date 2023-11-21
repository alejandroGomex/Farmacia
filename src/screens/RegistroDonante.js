import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/LogoNegro.png";

import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
  FlatList, // import FlatList
} from "react-native";
import { RegistroMedicinas } from "./RegistroMedicinas";

export const RegistroDonante = ({
  modalRegistroDonante,
  setModalRegistroDonante,
}) => {
  const [nombreDonante, setNombreDonante] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [modalRegistroMedicina, setModalRegistroMedicinas] = useState(false);
  const [modalListaDonantes, setModalListaDonantes] = useState(false);
  const [donantes, setDonantes] = useState([]);
  /* En la parte de    collection(FIRESTORE_DB, "donantesMedicamentos") se cambia lo que está dentro de las comillas por el nombre de la base de datos en firestore que se desee*/
  /*  const handleSubmit = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, "donantesMedicamentos"), {
      nombreDonante,
      cedula,
      telefono,
      correoElectronico,
    });
    console.log("Donante registrado con ID: ", doc.id);
  }; */
  /* En la parte de    collection(FIRESTORE_DB, "donantesMedicamentos") se cambia lo que está dentro de las comillas por el nombre de la base de datos en firestore que se desee*/
  /* useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(FIRESTORE_DB, "donantesMedicamentos")
      );
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDonantes(data);
    };
    fetchData();
  }, []); */
  /* En const ref = doc(FIRESTORE_DB, `donantesMedicamentos/${item.id}`); se referencia a la base de datos creada anteriormente */
  const DonanteItem = ({ item }) => {
    /* const ref = doc(FIRESTORE_DB, `donantesMedicamentos/${item.id}`);
    const deleteDonante = async () => {
      deleteDoc(ref);
      console.log("Donante eliminado con ID: ", item.id);
    }; */
    /* const updateDonante = async () => {
      updateDoc(ref, { done: !item.done });
      console.log("Donante actualizado con ID: ", item.id);
    }; */
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>Nombre: {item.nombreDonante}</Text>
        <Text style={styles.itemText}>Cedula: {item.cedula}</Text>
        <Text style={styles.itemText}>Telefono:{item.telefono}</Text>
        <Text style={styles.itemText}>
          Correo Electronico: {item.correoElectronico}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="delete"
              size={24}
              color="black"
              onPress={() => {
                // deleteDonante();
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Modal animationType="slide" visible={modalRegistroDonante}>
      <View style={styles.container}>
        <View style={styles.topBox} />
        <Image source={Logo} style={styles.logo} />
        <View style={styles.bottomBox} />
        <View>
          <Text style={styles.title}>Información del donante</Text>
        </View>
        <Text style={styles.label}>Nombre Donante:</Text>
        <TextInput
          style={styles.input}
          value={nombreDonante}
          onChangeText={(text) => setNombreDonante(text)}
          placeholder="Ingrese el nombre del donante"
        />

        <Text style={styles.label}>Cédula:</Text>
        <TextInput
          style={styles.input}
          value={cedula}
          onChangeText={(text) => setCedula(text)}
          placeholder="Ingrese la cédula"
        />

        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={(text) => setTelefono(text)}
          placeholder="Ingrese el teléfono"
        />

        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput
          style={styles.input}
          value={correoElectronico}
          onChangeText={(text) => setCorreoElectronico(text)}
          placeholder="Ingrese el correo electrónico"
        />

        <View flexDirection={"row"}>
          <Pressable
            style={[styles.button]}
            onPress={() => {
              setModalRegistroMedicinas(true);
              // handleSubmit();
              setCedula("");
              setCorreoElectronico("");
              setTelefono("");
              setNombreDonante("");
            }}
          >
            <Text style={styles.buttonText}>Registrar Medicamentos</Text>
          </Pressable>
          <Pressable
            style={[styles.button]}
            onPress={() => {
              setModalListaDonantes(true);
            }}
          >
            <Text style={styles.buttonText}>Ver Donantes</Text>
          </Pressable>
        </View>
      </View>

      {/* render modal with list of donantes */}
      <Modal animationType="slide" visible={modalListaDonantes}>
        <View style={styles.container}>
          <View style={styles.topBox} />
          <Image source={Logo} style={styles.logo} />
          <View style={styles.bottomBox} />
          <View>
            <Text style={styles.title}>Lista de Donantes</Text>
          </View>

          <FlatList
            style={{ width: "100%", height: "70%", marginBottom: 50 }}
            data={donantes}
            renderItem={({ item }) => <DonanteItem item={item} />}
            keyExtractor={(item) => item.id}
          />

          <Pressable
            style={[styles.button]}
            onPress={() => {
              setModalListaDonantes(false);
            }}
          >
            <Text style={styles.buttonText}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>

      {/* render modal with form to register ropa */}
      <RegistroMedicinas
        modalRegistroMedicina={modalRegistroMedicina}
        setModalRegistroMedicinas={setModalRegistroMedicinas}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  topBox: {
    marginTop: -110,
    backgroundColor: "rgba(67, 179, 169,0.8)", // Set your desired color
    height: 126, // Set the height of the top box
    width: 450,
  },
  bottomBox: {
    backgroundColor: "rgba(67, 179, 169,0.8)", // Set your desired color
    height: 100, // Set the height of the bottom box
    width: 450,
    position: "absolute",
    bottom: 0,
  },
  logo: {
    marginTop: -125,
    height: 125,
    width: 170,
    marginLeft: -40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    height: 45,
    width: 200,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: "#0069a3",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
