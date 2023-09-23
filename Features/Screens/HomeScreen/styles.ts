import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  searchContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop:30,
    marginBottom:20
  },
  buttonStyle: {
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    paddingVertical: 5,
  },
  searchedText: {
    color: 'red',
    margin: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    width:'80%'
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  errorContainer: {
    height: 40,
    width: '90%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  errorText: {
    color: 'white',
  },
  details: {
    paddingVertical: 10,
  },
  tableHeader: {
    height: 50,
    backgroundColor: '#f1f8ff',
  },
  tableText: {
    margin: 6,
    color: 'black',
  },

});
