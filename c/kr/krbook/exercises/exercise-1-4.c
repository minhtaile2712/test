#include <stdio.h>

/* print Fahrenheit-Celsius table
    for fahr = 0, 20, ..., 300; floating-point version */
main()
{
    float fahr, celsius;
    float lower, upper, step;

    lower = 0;  /* lower limit of temperatuire scale */
    upper = 150;    /* upper limit */
    step = 10;  /* step size */

    printf("  C    F\n");

    celsius = lower;
    while (celsius <= upper) {
        fahr = celsius * (9.0 / 5.0) + 32;
        printf("%3.0f %6.1f\n", celsius, fahr);
        celsius = celsius + step;
    }
}