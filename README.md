# Stamps - Mini Test (JavaScript / Node.js)

Source code for the Software Developer mini test.

## Requirements
- Node.js 18 or newer (uses native `fetch`, no npm packages needed)

## 1. `task1_reverse_fizzbuzz.js`
Prints numbers 1-100 in reverse order with the following rules:
- Skip prime numbers
- Multiples of 3 → `Foo`
- Multiples of 5 → `Bar`
- Multiples of 3 and 5 → `FooBar`
- Printed horizontally on a single line

Run:
```
node task1_reverse_fizzbuzz.js
```

Example output:
```
Bar Foo 98 Foo Bar 94 Foo 92 91 FooBar 88 ... 4 1
```

## 2. `task2_weather_jakarta.js`
Prints a 5-day weather forecast for Jakarta using the OpenWeatherMap free
"5 day / 3 hour" forecast API, showing one temperature per day.

The API key is read from an environment variable and is **not** hardcoded
in the source code.

Setup:
```powershell
# Windows PowerShell
$env:OWM_API_KEY="your_key_here"
node task2_weather_jakarta.js
```
```bash
# macOS/Linux
export OWM_API_KEY=your_key_here
node task2_weather_jakarta.js
```

Get a free API key at: https://home.openweathermap.org/users/sign_up
(Note: newly created keys can take up to a couple of hours to activate.)

Example output:
```
Fri, 23 Apr 2026: 16.7°C
Sat, 24 Apr 2026: 17.2°C
Sun, 25 Apr 2026: 15.9°C
Mon, 26 Apr 2026: 16.4°C
Tue, 27 Apr 2026: 17.0°C
```

## Author
Dedi Murphy
