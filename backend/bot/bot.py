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
    website_url = 'https://shorturl.at/vzCU4'
    keyboard = types.InlineKeyboardMarkup()
    url_button = types.InlineKeyboardButton(text='s', web_app=WebAppInfo(url=website_url))
    keyboard.add(url_button)
    await message.answer("wev'''", reply_markup=keyboard)



async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
