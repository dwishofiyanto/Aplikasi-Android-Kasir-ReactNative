import React, { useState } from "react";

import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

// export default function tanggal() {
    const tanggal = ({route, navigation }) => {
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));

  function showDatePicker() {
    setDatePicker(true);
  };

  function showTimePicker() {
    setTimePicker(true);
  };

  function onDateSelected(event, value) {
    
    setDate(value);
    setDatePicker(false);
  };

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styleSheet.MainContainer}>

        <Text style={styleSheet.text}>Date = {date.toLocaleDateString('Id')}</Text>

        <Text style={styleSheet.text}>Time = {time.toLocaleTimeString('en-US')}</Text>

        {datePicker && (
          <DateTimePicker
            value={date}
          
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
           
            style={styleSheet.datePicker}
          />
        )}

        {timePicker && (
          <DateTimePicker
            value={time}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onTimeSelected}
            style={styleSheet.datePicker}
          />
        )}

        {!datePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Show Date Picker" color="green" onPress={showDatePicker} />
          </View>
        )}

        {!timePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Show Time Picker" color="green" onPress={showTimePicker} />
          </View>
        )}

      </View>
    </SafeAreaView>
  );
}
export default tanggal;


const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },

  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },

});