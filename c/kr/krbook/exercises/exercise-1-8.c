#include <stdio.h>

/* count blanks, tabs, and newlines in input */
int main()
{
	int c, nb, nt, nl;

	nb = 0;	/* Number of blanks */
	nt = 0;	/* Number of tabs */
	nl = 0;	/* Number of newlines */
	while ((c = getchar()) != EOF)
		if (c == ' ')
			++nb;
		else if (c == '\t')
			++nt;
		else if (c == '\n')
			++nl;
	printf("nb = %d\n", nb);
	printf("nt = %d\n", nt);
	printf("nl = %d\n", nl);

	return 0;
}