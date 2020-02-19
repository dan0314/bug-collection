{-# LANGUAGE FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

module Main where

import Data.Map.Strict
import qualified Data.Map.Strict as M
import Control.Monad
import Data.Array
import Data.Bits
import Data.List
import Data.List.Split
import Data.Set
import Debug.Trace
import System.Environment
import System.IO
import System.IO.Unsafe

type SockCountMap = Map Int Int

-- Complete the sockMerchant function below.
-- 我原以为都导进来高亮会好一些 实际上是我想多了
sockMerchant n ar =
  let sockCountMap = sockMerchant_ M.empty ar
  in M.foldl' (\acc curr -> acc + curr `div` 2) 0 sockCountMap
  where
    sockMerchant_ m [] = m
    sockMerchant_ m (sockType:ts) = let
      newM = alter mapUpdater sockType m
      in sockMerchant_ newM ts
    mapUpdater Nothing = Just 1
    mapUpdater (Just a) = Just (a + 1)

readMultipleLinesAsStringArray :: Int -> IO [String]
readMultipleLinesAsStringArray 0 = return []
readMultipleLinesAsStringArray n = do
  line <- getLine
  rest <- readMultipleLinesAsStringArray(n - 1)
  return (line : rest)

main :: IO()
main = do
  stdout <- getEnv "OUTPUT_PATH"
  fptr <- openFile stdout WriteMode

  n <- readLn :: IO Int

  arTemp <- getLine

  let ar = Data.List.map (read :: String -> Int) . words $ arTemp

  let result = sockMerchant n ar

  hPutStrLn fptr $ show result

  hFlush fptr
  hClose fptr
