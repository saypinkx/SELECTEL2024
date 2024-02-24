import asyncio
import logging
from aiogram import Bot, Dispatcher, types

from config import BOT_KEY
from aiogram.types.web_app_info import WebAppInfo
# from aiogram.utils.exceptions
# Включаем логирование, чтобы не пропустить важные сообщения
logging.basicConfig(level=logging.INFO)
# Объект бота
bot = Bot(token=BOT_KEY)
# Диспетчер
dp = Dispatcher(bot=bot)


# Хэндлер на команду /start
@dp.message_handler(commands='start')
async def start(message: types.Message):
    website_url1 = 'https://shorturl.at/vzCU4'
    keyboard = types.InlineKeyboardMarkup()
    url_button0 = types.InlineKeyboardButton(text='Мои донации', web_app=WebAppInfo(url=website_url1))
    url_button1 = types.InlineKeyboardButton(text='Cдать кровь', web_app=WebAppInfo(url=website_url1))
    url_button2 = types.InlineKeyboardButton(text='Журнал и события', web_app=WebAppInfo(url=website_url1))
    url_button3 = types.InlineKeyboardButton(text='Помощь проекту', web_app=WebAppInfo(url=website_url1))
    url_button4 = types.InlineKeyboardButton(text='Профиль и регистрация', web_app=WebAppInfo(url=website_url1))
    url_button5 = types.InlineKeyboardButton(text='Мои донации', web_app=WebAppInfo(url=website_url1))
    keyboard.row(url_button0, url_button1)
    keyboard.row(url_button2, url_button3)
    keyboard.row(url_button4)
    # keyboard.add(url_button0)
    # keyboard.add(url_button1)
    # keyboard.add(url_button2)
    # keyboard.add(url_button3)
    # keyboard.add(url_button4)
    await message.answer("wev'''", reply_markup=keyboard)



async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
