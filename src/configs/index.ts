import winreg, { Registry, HKCU } from 'winreg'

export const getDbAccess = async () => {
  const regKey: Registry = new winreg({
    hive: HKCU,
    key: '\\Software\\PHDVReceptor',
  });

  const values = await regKey.values();
  const dbFile = values.filter(v => v.name === 'DatabasePath')[0];

  return {
    file: dbFile ? dbFile.value : 'data/order_receptor.mdb',
    password: 'y6u7mj',
  }
}
