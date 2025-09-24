self.addEventListener('push', event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: 'https://i.pinimg.com/736x/ef/c8/25/efc8255e3dc062530d2153b5fe807732.jpg'
  });
});