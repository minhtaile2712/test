
#include <iostream>
#include <vector>

#include "MainConfig.h"

using namespace std;

class Vector
{
public:
  Vector(int s) : elem(new double[s]), sz(s) {}
  double &operator[](int i) { return elem[i]; }
  int size() { return sz; }

private:
  double *elem; // pointer to the elements
  int sz;
};

template <typename T>
class Less_than
{
  const T val;

public:
  Less_than(const T &v) : val(v) {}
  bool operator()(const T &x) const { return x < val; }
};

int main(int argc, char *argv[])
{
  int i = 42;
  Less_than<int> lti = i;

  string s = "tai";
  Less_than<string> lts = s;

  bool b1 = lti(27);
  cout << "result is " << b1 << ".\n";

  bool b2 = lts("le");
  cout << "result is " << b2 << ".\n";

  int ii(3);

  cout << ii << ii << ii << endl;
}
