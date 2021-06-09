#include <stdio.h>

int main()
{
	int c;

	while ((c = getchar()) != EOF) {
		if (c == ' ' || c == '\t' || c == '\n') {
			putchar('\n');
			while ((c = getchar()) == ' ' || c == '\t' || c == '\n')
				;
			if (c == EOF)
				break;
		}
		putchar(c);
	}

	return 0;
}