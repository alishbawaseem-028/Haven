import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Shop screen (inside shop group) */}
      <Stack.Screen
        name="(shop)"
        options={{ headerShown: false, title: 'Shop' }}
      />

      {/* Top-level screens outside shop */}
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, title: 'Categories' }}
      />

      <Stack.Screen
        name="product"
        options={{ headerShown: true, title: 'Product' }}
      />

      <Stack.Screen
        name="cart"
        options={{ presentation: 'modal', headerShown: true, title: 'Shopping Cart' }}
      />

      <Stack.Screen
        name="auth"
        options={{ headerShown: true, title: 'Authorization' }}
      />
    </Stack>
  );
}