import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, Button, Subheading, Title} from 'react-native-paper';

const Settings = () => {
  return (
    <View style={{alignItems: 'center', marginTop: 16}}>
      <Avatar.Text label={'UN'} style={{marginLeft: 11}} />
      <Title>User Name</Title>
      <Subheading>user@name.com</Subheading>
      <Button>SignOut</Button>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
