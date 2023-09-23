import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {dataObj} from '../../Assets/Data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Table, Row, Rows} from 'react-native-table-component';
import {styles} from './styles';
import {User, AppProps} from '../../Types/types';
import {searchByName} from '../../Helper/utils';

const App: React.FC<AppProps> = () => {
  const [searchedUser, setSearchedUser] = useState<string>('');
  const [userList, setUserList] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const tableData = userList.map(item => [
    item.isSearchedUser ? (
      <Text style={styles.searchedText}>{item.name}</Text>
    ) : (
      item.name
    ),
    item.rank.toString(),
    item.bananas.toString(),
    item.isSearchedUser ? 'Yes' : 'No',
  ]);

  const handleSearch = () => {
    if (searchedUser.trim() != '') {
      const user = searchByName(searchedUser, dataObj);
      if (!user) {
        Alert.alert(
          'Alert Title',
          'This user name does not exist! Please specify an existing user name.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
        );
        setUserList([]);
      } else {
        const sortedUsers = Object.values(dataObj).sort(
          (a, b) => b.bananas - a.bananas,
        );
        const userIndex = sortedUsers.findIndex(u =>
          u.name.toLowerCase().includes(searchedUser.toLowerCase()),
        );
        if (userIndex < 0) {
          setErrorMessage('No users found');
          setTimeout(() => {
            setErrorMessage('');
          }, 200);
          setUserList([]);
        } else {
          const topUsers = sortedUsers.slice(0, 10).map((user, index) => ({
            name: user.name,
            rank: index + 1,
            bananas: user.bananas,
            isSearchedUser: user.name
              .toLowerCase()
              .includes(searchedUser.toLowerCase()),
          }));
          if (userIndex < 10) {
            setUserList(topUsers);
          } else {
            topUsers[9] = {
              name: user.name,
              rank: userIndex + 1,
              bananas: user.bananas,
              isSearchedUser: true,
            };
            setUserList(topUsers);
          }
          setErrorMessage('');
        }
      }
    } else {
      setErrorMessage('Please enter the name');
      setTimeout(() => {
        setErrorMessage('');
      }, 200);
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            onChangeText={text => setSearchedUser(text)}
            value={searchedUser}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleSearch()}
          style={styles.buttonStyle}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      {errorMessage ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : (
        <View>
          {userList.length > 0 ? (
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={['Name', 'Rank', 'Bananas', 'Searched User']}
                style={styles.tableHeader}
                textStyle={styles.tableText}
              />
              <Rows data={tableData} textStyle={styles.tableText} />
            </Table>
          ) : null}
        </View>
      )}
    </View>
  );
};
export default App;
