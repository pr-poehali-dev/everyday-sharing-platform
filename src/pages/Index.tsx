import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  owner: string;
  rating: number;
  available: boolean;
}

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [bookingDate, setBookingDate] = useState<Date | undefined>(new Date());
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Все категории', icon: 'Grid3x3' },
    { id: 'tools', name: 'Инструменты', icon: 'Wrench' },
    { id: 'camping', name: 'Туризм', icon: 'Tent' },
    { id: 'sports', name: 'Спорт', icon: 'Dumbbell' },
    { id: 'tech', name: 'Электроника', icon: 'Laptop' },
  ];

  const items: Item[] = [
    { id: 1, name: 'Перфоратор Bosch', category: 'tools', price: 500, image: 'https://cdn.poehali.dev/projects/fba37324-4b61-4de9-85cc-6c3a6160e155/files/e3d8792d-783a-4b2f-88aa-b481178eccd6.jpg', owner: 'Александр М.', rating: 4.9, available: true },
    { id: 2, name: 'Палатка 4-местная', category: 'camping', price: 800, image: 'https://cdn.poehali.dev/projects/fba37324-4b61-4de9-85cc-6c3a6160e155/files/0ed3434f-5ac7-402e-be46-3520af63f18a.jpg', owner: 'Мария К.', rating: 5.0, available: true },
    { id: 3, name: 'Велосипед горный', category: 'sports', price: 600, image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400', owner: 'Дмитрий П.', rating: 4.7, available: false },
    { id: 4, name: 'Дрель аккумуляторная', category: 'tools', price: 350, image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400', owner: 'Ольга В.', rating: 4.8, available: true },
    { id: 5, name: 'GoPro Hero 11', category: 'tech', price: 1200, image: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400', owner: 'Сергей Л.', rating: 5.0, available: true },
    { id: 6, name: 'Сноуборд Burton', category: 'sports', price: 700, image: 'https://images.unsplash.com/photo-1516490701305-f5ee0eb8e999?w=400', owner: 'Анна С.', rating: 4.6, available: true },
  ];

  const filteredItems = items.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const myBookings = [
    { id: 1, itemName: 'Перфоратор Bosch', date: '15-18 ноября', status: 'active', price: 1500 },
    { id: 2, itemName: 'Палатка 4-местная', date: '22-25 ноября', status: 'pending', price: 2400 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Icon name="Share2" className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ShareIt
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="gap-2">
                <Icon name="Heart" size={20} />
                Избранное
              </Button>
              <Button variant="ghost" className="gap-2">
                <Icon name="MessageCircle" size={20} />
                Сообщения
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 gap-2">
                <Icon name="Plus" size={20} />
                Добавить вещь
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                🚀 Новая эра шеринга
              </Badge>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Делись вещами.
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Зарабатывай легко
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Платформа для аренды повседневных вещей между соседями. Бронируй инструменты, снаряжение и технику на нужные даты.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
                  Начать пользоваться
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-purple-200 hover:border-purple-300">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 mt-8 pt-8 border-t border-purple-100">
                <div>
                  <div className="text-3xl font-bold text-purple-600">2,500+</div>
                  <div className="text-sm text-gray-600">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">8,400+</div>
                  <div className="text-sm text-gray-600">Успешных сделок</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">4.9</div>
                  <div className="text-sm text-gray-600">Средний рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/fba37324-4b61-4de9-85cc-6c3a6160e155/files/e8fd36e1-2fd0-405f-91d0-2534134ffbac.jpg"
                alt="Sharing platform"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-14 bg-white rounded-2xl shadow-sm">
            <TabsTrigger value="catalog" className="text-base rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Icon name="Grid3x3" size={18} className="mr-2" />
              Каталог
            </TabsTrigger>
            <TabsTrigger value="account" className="text-base rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Icon name="User" size={18} className="mr-2" />
              Мои бронирования
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Поиск вещей..."
                  className="pl-12 h-12 rounded-2xl border-2 border-purple-100 focus:border-purple-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.id ? 'default' : 'outline'}
                    className={`rounded-xl gap-2 ${
                      activeCategory === cat.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                        : 'border-2 border-purple-100 hover:border-purple-300'
                    }`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <Icon name={cat.icon as any} size={18} />
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 rounded-2xl animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {!item.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Badge className="bg-white text-gray-900">Занято</Badge>
                      </div>
                    )}
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900">
                      <Icon name="Star" size={12} className="text-yellow-500 fill-yellow-500 mr-1" />
                      {item.rating}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Icon name="User" size={14} />
                          {item.owner}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          ₽{item.price}
                        </div>
                        <div className="text-xs text-gray-500">за день</div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            disabled={!item.available}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(item);
                            }}
                          >
                            Забронировать
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">Бронирование: {selectedItem?.name}</DialogTitle>
                          </DialogHeader>
                          <div className="grid md:grid-cols-2 gap-6 py-4">
                            <div>
                              <img
                                src={selectedItem?.image}
                                alt={selectedItem?.name}
                                className="w-full h-64 object-cover rounded-xl"
                              />
                              <div className="mt-4 space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Владелец:</span>
                                  <span className="font-medium">{selectedItem?.owner}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Рейтинг:</span>
                                  <span className="font-medium flex items-center gap-1">
                                    <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                                    {selectedItem?.rating}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Цена:</span>
                                  <span className="font-bold text-purple-600">₽{selectedItem?.price}/день</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-3">Выберите даты</h3>
                              <Calendar
                                mode="single"
                                selected={bookingDate}
                                onSelect={setBookingDate}
                                className="rounded-xl border-2 border-purple-100"
                                disabled={(date) => date < new Date()}
                              />
                              {bookingDate && (
                                <div className="mt-4 p-4 bg-purple-50 rounded-xl">
                                  <div className="text-sm text-gray-600 mb-1">Выбранная дата:</div>
                                  <div className="font-semibold text-purple-700">
                                    {bookingDate.toLocaleDateString('ru-RU')}
                                  </div>
                                </div>
                              )}
                              <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                Подтвердить бронирование
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                  АП
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Александр Петров</h2>
                  <p className="text-gray-600">Участник с марта 2024</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">4.9</span>
                    <span className="text-gray-500 text-sm">(12 отзывов)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-gray-600 mt-1">Активных бронирований</div>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-pink-600">23</div>
                  <div className="text-sm text-gray-600 mt-1">Всего сделок</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-orange-600">₽12,500</div>
                  <div className="text-sm text-gray-600 mt-1">Заработано</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Мои бронирования</h3>
              <div className="space-y-4">
                {myBookings.map((booking) => (
                  <Card key={booking.id} className="border-2 border-purple-100 rounded-xl">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-lg">{booking.itemName}</h4>
                          <p className="text-gray-600 flex items-center gap-1 mt-1">
                            <Icon name="Calendar" size={14} />
                            {booking.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">₽{booking.price}</div>
                          <Badge
                            className={
                              booking.status === 'active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }
                          >
                            {booking.status === 'active' ? 'Активно' : 'Ожидание'}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <footer className="bg-white border-t border-purple-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Icon name="Share2" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ShareIt
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Платформа для шеринга повседневных вещей между соседями
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Категории</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Инструменты</li>
                <li>Туризм</li>
                <li>Спорт</li>
                <li>Электроника</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Правила</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Как это работает</li>
                <li>Правила шеринга</li>
                <li>Безопасность</li>
                <li>Страхование</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@shareit.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Онлайн-чат
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-100 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 ShareIt. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
