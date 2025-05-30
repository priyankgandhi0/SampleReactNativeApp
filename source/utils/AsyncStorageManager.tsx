import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageManager {
  // Method to get data from AsyncStorage (promise-based)
  static getDataHandler<T>(key: string): Promise<T | null> {
    return AsyncStorage.getItem(key)
      .then(data => {
        if (data !== null) {
          return JSON.parse(data) as T;
        }
        return null;
      })
      .catch(error => {
        console.error('Error getting data from AsyncStorage:', error);
        return null;
      });
  }

  // Async/await version of getData
  static async getData<T>(key: string): Promise<T | null> {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        return JSON.parse(data) as T;
      }
      return null;
    } catch (error) {
      console.error('Error getting data from AsyncStorage:', error);
      return null;
    }
  }

  // Method to set data in AsyncStorage
  static async setData(key: string, value: unknown): Promise<boolean> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      console.log('Data saved successfully!');
      return true;
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
      return false;
    }
  }

  // Method to remove data from AsyncStorage
  static async removeData(key: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed successfully!');
      return true;
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
      return false;
    }
  }

  // Method to clear all AsyncStorage data
  static async clearAllData(): Promise<boolean> {
    try {
      await AsyncStorage.clear();
      console.log('All data cleared successfully!');
      return true;
    } catch (error) {
      console.error('Error clearing data from AsyncStorage:', error);
      return false;
    }
  }
}

export default AsyncStorageManager;
