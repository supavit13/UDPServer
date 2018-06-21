import socket

UDP_IP = "158.108.130.130"
UDP_PORT = 6001

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

sock.bind((UDP_IP,UDP_PORT))

while True:
    data, addr = sock.recvfrom(1024)
    print(data, addr)
    sock.sendto(data,addr)