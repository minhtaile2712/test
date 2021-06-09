#include <stdio.h>

int main()
{
	int c;

	while ((c = getchar()) != EOF) {
		if (c == '\t') {
			putchar('\\');
			putchar('t');
		} else if (c == '\\') {
			putchar('\\');
			putchar('\\');
		} else if (c == ' ') {
			putchar('\\');
			putchar('b');
		} else
			putchar(c);
	}

	return 0;
}