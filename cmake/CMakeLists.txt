cmake_minimum_required(VERSION 3.10)

project(Main VERSION 1.0)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)

configure_file(MainConfig.h.in MainConfig.h)

add_executable(Main Main.cxx)

target_include_directories(Main PUBLIC
                           "${PROJECT_BINARY_DIR}"
                           )