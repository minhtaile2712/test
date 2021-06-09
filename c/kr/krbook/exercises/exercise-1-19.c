#include <stdio.h>

#define MAXLINE 1000	/* maximum input line size */

int _getline(char line[], int maxline);

int main()
{
	int len;	/*current line length */
	char line[MAXLINE];	/* current input line */
	
	while ((len = _getline(line, MAXLINE)) > 0) {
		if (line[len - 1] != '\n')
			putchar(line[len - 1]);
		for (int i = len - 2; i >= 0; i--)
			putchar(line[i]);
		putchar('\n');
	}
	return 0;
}

/* _getline: read a line into s, return length */
int _getline(char s[],int lim)
{
	int c, i;

	for (i = 0; i < lim - 1 && (c = getchar()) != EOF && c != '\n'; ++i)
		s[i] = c;
	if (c == '\n') {
		s[i] = c;
		++i;
	}
	s[i] = '\0';
	return i;
}