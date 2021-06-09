#include <stdio.h>

#define IN 1	/* inside a word */
#define OUT 0	/* outside a word */

int main()
{
	int c;
	int ndigit = 0;
	int state = OUT;

	while ((c = getchar()) != EOF) {
		if (c == ' ' || c == '\t' || c =='\n') {
			for (int i = 0; i < ndigit; i++)
			{
				putchar('-');
			}
			putchar('\n');
			state = OUT;
			ndigit = 0;
		} else if (state = OUT) {
			state = IN;
			ndigit++;
		} else
			ndigit++;
	}

	return 0;
}