import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { cart, menu, list } from '../assets/image'; // Update with your actual image paths

const CurvedBottomBar = ({ state, navigation }) => {
  const tabs = [
    { name: 'home', icon: menu, label: 'home' },
    { name: 'OrderList', icon: list, label: 'OrderList' },
    { name: 'Cart', icon: cart, label: 'Cart' }
  ];

  const focusedIndex = state.index;

  return (
    <View style={styles.container}>
      <View style={styles.curveContainer}>
        <Svg width="100%" height={60} viewBox="0 0 100 60" style={styles.curve}>
          <Path
            d="M0 0 C40 60 60 60 100 0 Z"
            fill="white"
          />
        </Svg>
      </View>

      <View style={styles.activeIndicator}>
        <Image 
          source={tabs[focusedIndex].icon} 
          style={styles.activeIcon} 
        />
        {/* <Text style={styles.activeLabel}>{tabs[focusedIndex].label}</Text> */}
      </View>

      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabButton}
            onPress={() => navigation.navigate(tab.name)}
            activeOpacity={0.7}
          >
            <Image
              source={tab.icon}
              style={[
                styles.tabIcon,
                { opacity: focusedIndex === index ? 1 : 0.5 }
              ]}
            />
            <Text style={[
              styles.tabLabel,
              { color: focusedIndex === index ? '#6C3EF2' : '#b0b0b0' }
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    overflow: 'visible',
  },
  curveContainer: {
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    height: 60,
  },
  curve: {
    width: '100%',
    height: '100%',
  },
  activeIndicator: {
    position: 'absolute',
    top: -35,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#6C3EF2',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: '#6C3EF2',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  activeIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  activeLabel: {
    position: 'absolute',
    bottom: -20,
    color: '#6C3EF2',
    fontSize: 12,
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default CurvedBottomBar;