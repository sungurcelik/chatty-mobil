import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
} from 'react-native-paper';

const ChatList = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <List.Item
        title="User Name"
        description="Hi, I will be wating for you"
        left={() => (
          <Avatar.Text label="UN" size={56} style={{marginLeft: 11}} />
        )}
      />
      <Divider horizontalInset />
      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(false)}>
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput label={'Enter user email'} />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
            <Button>Save</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FAB
        icon="bell"
        style={{position: 'absolute', bottom: 16, right: 16, borderRadius: 50}}
        onPress={() => setIsDialogVisible(true)}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
