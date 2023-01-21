#include <iostream> //cin, cout, fixed, endl, left, right
#include <iomanip> //setprecision, setw
#include <string> 
#include <fstream> //ofstream, ifstream
#include <cstdlib> //exit

using namespace std;

int main(){
    ifstream reader;
    ofstream readerOut;
    string content;

    // readerOut.open("E:\\CISP301\\LAB 20\\readerOut.txt");
    //     if (!readerOut.is_open()){
    //         cout << "FILE NOT OPEN. NOW TERMINATING!";
    //         exit(EXIT_FAILURE);
    //     }
    
    reader.open("/src/abilities.ts");

    if (!reader.is_open()){
        cout << "FILE NOT OPEN. NOW TERMINATING!";
        exit(EXIT_FAILURE);
    }

    while (!reader.eof()){
		if (!reader.eof()){
            reader >> content;
            cout << content;
        }
    }

    // reader.open("/src/abilities.ts");
    
    reader.close();
    exit(0);
}



