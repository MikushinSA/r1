import kotlinx.html.div
import kotlinx.html.dom.append
import org.w3c.dom.Node
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.button
import kotlinx.html.id
import kotlinx.html.input
import kotlinx.html.js.label
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLabelElement
import org.w3c.dom.events.Event

fun main() {
    window.onload = { document.body?.createCalculator() }
}

fun onClickCelsiusToFahrenheit(e: Event): Unit {
    val celsiusInput: HTMLInputElement =
        document.getElementById("celsius") as HTMLInputElement
    val fahrenheitInput: HTMLInputElement =
        document.getElementById("fahrenheit") as HTMLInputElement
    val celsius: Double = celsiusInput.value.toDoubleOrNull() ?: 0.0
    fahrenheitInput.value = (celsius * 9 / 5 + 32).toString()
}

fun onClickFahrenheitToCelsius(e: Event): Unit {
    val celsiusInput: HTMLInputElement =
        document.getElementById("celsius") as HTMLInputElement
    val fahrenheitInput: HTMLInputElement =
        document.getElementById("fahrenheit") as HTMLInputElement
    val fahrenheit: Double = fahrenheitInput.value.toDoubleOrNull() ?: 0.0
    celsiusInput.value = ((fahrenheit - 32)* 5 / 9).toString()
}

fun Node.createCalculator() {
    append {
        div {
            label {
                +"Цельсия:"
            }
            input {
                id = "celsius"
            }
        }
        div {
            label {
                +"Фаренгейт:"
            }
            input {
                id = "fahrenheit"
            }
        }
        button {
            +"Цельсия в Фаренгейт"
            onClickFunction = ::onClickCelsiusToFahrenheit
        }
        button {
            +"Фаренгейт в Цельсия"
            onClickFunction = ::onClickFahrenheitToCelsius
        }
    }
}
