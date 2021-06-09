#include <stdio.h>

int main()
{
	int c;
	int nchar[95] = {0};
	while ((c = getchar()) != EOF)
	{
		nchar[c - 32]++;
	}
	for (int i = 0; i < 95; i++)
		if (nchar[i] != 0) {
			printf("%c| ", i + 32);
			for (int j = 0; j < nchar[i]; j++)
				putchar('-');
			putchar('\n');
		}
	
	int maxheight = 0;
	for (int i = 0; i < 95; i++)
		if (nchar[i] > maxheight)
			maxheight = nchar[i];

	for (int i = maxheight; i > 0; i--) {
		for (int j = 0; j < 95; j++)
			if (nchar[j] != 0) {
				if (i > nchar[j])
					putchar(' ');
				else
					putchar('|');
				putchar(' ');
			}
				
		putchar('\n');
	}

	for (int i = 0; i < 95; i++)
		if (nchar[i] != 0)
			printf("__");
	putchar('\n');

	for (int i = 0; i < 95; i++)
		if (nchar[i] != 0) {
			putchar(i + 32);
			putchar(' ');
		}
	putchar('\n');

	return 0;
}