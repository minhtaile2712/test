#include <stdio.h>

#define MAXLINE 1000	/* maximum input line size */

int _getline(char line[], int maxline);
int detab(int);

int main()
{
	int len;
	char line[MAXLINE];

	while ((len = _getline(line, MAXLINE)) > 0)
	{
		/* code */
	}
	
	return 0;
}

int detab(int n)
{
	
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