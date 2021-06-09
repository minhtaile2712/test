#include <unistd.h>

#define BUFFSIZE 16

int main()
{
  char buf[BUFFSIZE];
  int n;

  while ((n = read(0, buf, BUFFSIZE)) > 0)
    write(1, buf, n);

  return 0;
}